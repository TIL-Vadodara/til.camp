import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import moment from 'moment'
import generateUrl from 'generate-google-calendar-url'
import DateBox from './DateBox'
import ButtonRow from '../ButtonRow'
import IconCalendar from '../../icons/Calendar'
import IconLocation from '../../icons/Location'
import IconPresenter from '../../icons/Presenter'
import * as colors from '../../config/theme/colors'
import * as spacings from '../../config/theme/spacings'
import * as typography from '../../config/theme/typography'
import { media } from '../../config/theme/breakpoints'
import responsiveSize from '../../utils/responsiveSize'

const Item = styled.li`
  position: relative;
  list-style-type: none;
  margin-bottom: ${spacings.medium};
  border-top: 1px solid ${colors.borderColor};
  border-bottom: 1px solid ${colors.borderColor};
  color: ${colors.secondaryTextColor};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

  ${media.medium`
    border-right: 1px solid ${colors.borderColor};
    border-left: 1px solid ${colors.borderColor};
    border-radius: 4px;
    overflow: hidden;
  `};
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: ${spacings.large} ${spacings.large};
`

const BannerContainer = styled.div`
  position: relative;
  padding-bottom: 56%;
  overflow: hidden;
  border-bottom: 1px solid ${colors.borderColor};
  background-color: ${colors.imagePlaceholderColor};
`

const Banner = styled.img`
  position: absolute;
  width: 100%;
`

const Contents = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex: 1 1 0%;
`

const Details = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  color: ${colors.tertiaryTextColor};
  font-size: ${responsiveSize(14, 16)};
`

const Time = styled.div`
  margin-top: ${spacings.xSmall};
  margin-right: ${spacings.medium};
`

const Place = styled.a`
  margin-top: ${spacings.xSmall};
  margin-right: ${spacings.medium};
  border-bottom: 1px dashed ${lighten(0.25, colors.tertiaryTextColor)};
  color: currentColor;
`

const Presenter = styled.div`
  margin-top: ${spacings.xSmall};
`

const Title = styled.h3`
  margin: 0;
  font-size: ${responsiveSize(18, 20)};
`

const Description = styled.p`
  color: ${colors.secondaryTextColor};
`

const StyledButtonRow = styled(ButtonRow)`
  background-color: hsl(0, 0%, 99%);
`

const ItemAction = styled.a`
  flex: 1 0;
  padding: ${spacings.small} 0;
  text-align: center;
  color: ${colors.tertiaryTextColor};
  cursor: pointer;
  font-size: ${responsiveSize(14, 16)};

  ${props =>
    props.primary &&
    css`
      color: ${colors.primaryColor};
      font-weight: ${typography.fontWeightSemiBold};
    `};

  ${props =>
    props.disabled &&
    css`
      opacity: 0.25;
      pointer-events: none;
    `};
`

class EventListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isExpanded: false,
    }

    this.toggleExpand = this.toggleExpand.bind(this)
  }

  toggleExpand() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }

  render() {
    const { event, ...rest } = this.props
    return (
      <Item {...rest}>
        <BannerContainer>
          <Banner src={event.bannerUrl} />
        </BannerContainer>
        <ContentWrapper>
          <DateBox date={event.date} />
          <Contents>
            <Title>{event.title}</Title>
            <Details>
              <Time>
                <IconCalendar style={{ marginRight: '6px' }} />
                {event.startTime} - {event.endTime}
              </Time>
              <Place href={event.venue.googleMapLink} target="_blank">
                <IconLocation style={{ marginRight: '6px' }} />
                {event.venue.name}
              </Place>
              {event.presenter && (
                <Presenter>
                  <IconPresenter style={{ marginRight: '6px' }} />
                  {event.presenter}
                </Presenter>
              )}
            </Details>
            {this.state.isExpanded &&
              event.description && (
                <Description
                  dangerouslySetInnerHTML={{
                    __html: event.description.replace('\n', '<br/><br/>'),
                  }}
                />
              )}
          </Contents>
        </ContentWrapper>
        <StyledButtonRow>
          <ItemAction disabled={!event.description} onClick={this.toggleExpand}>
            {this.state.isExpanded ? 'Show less details' : 'View more details'}
          </ItemAction>
          <ItemAction
            primary
            href={generateUrl({
              start: moment(`${event.date} ${event.startTime}`).toDate(),
              end: moment(`${event.date} ${event.endTime}`).toDate(),
              title: event.title,
              details: event.description,
              location: `${event.venue.name} ${event.venue.googleMapLink}`,
            })}
            target="_blank"
          >
            Add to calendar
          </ItemAction>
        </StyledButtonRow>
      </Item>
    )
  }
}

EventListItem.propTypes = {
  event: PropTypes.object,
}

export default EventListItem
