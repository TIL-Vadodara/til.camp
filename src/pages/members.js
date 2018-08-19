import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  borderColor,
  tertiaryTextColor,
  secondaryTextColor,
} from '../config/theme/colors'
import { media } from '../config/theme/breakpoints'
import { large, medium, small, xxSmall, xLarge } from '../config/theme/spacings'
import IconFacebook from '../icons/Facebook'
import IconTwitter from '../icons/Twitter'
import IconLinkedIn from '../icons/LinkedIn'
import IconInstagram from '../icons/Instagram'

const StyledUl = styled.ul`
  padding: 0;
`

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: ${large};
  padding: ${small};
  border: 1px solid ${borderColor};
  border-radius: 3px;
  list-style-type: none;

  ${media.medium`
    padding: ${large};
  `};
`

const ItemHeader = styled.div`
  display: flex;
  flex-direction: row;
`

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: cover;
  border: 1px solid ${borderColor};
`

const MemberDetails = styled.div`
  flex-direction: row;
  flex: 1;
  margin-left: ${medium};
`

const MemberName = styled.h2`
  margin: 0;
`

const MemberSubtitle = styled.h3`
  margin: 0;
  margin-bottom: ${xxSmall};
  color: ${secondaryTextColor};
`

const MemberLocation = styled.span`
  font-weight: normal;
  color: ${tertiaryTextColor};
`

const ItemBody = styled.div``

const MemberBio = styled.p`
  color: ${secondaryTextColor};
`

const ItemFooter = styled.div``

const SocialLink = styled.a`
  padding: 4px 11px;
  font-size: 20px;
`

const SearchContainer = styled.div`
  position: relative;
  margin-top: ${xLarge};
`

const SearchLabel = styled.label`
  position: absolute;
  top: -6px;
  left: 10px;
  font-size: 14px;
  color: ${tertiaryTextColor};
  text-transform: uppercase;
  font-size: 12px;
`

const Input = styled.input`
  outline: none;
  padding: 10px;
  border: 1px solid ${borderColor};
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: inherit;
  font-family: inherit;
`

const MemberItem = ({ memberData }) => (
  <StyledLi>
    <ItemHeader>
      <Avatar atl={`${memberData.name}'s Photo`} src={memberData.photo} />
      <MemberDetails>
        <MemberName>{memberData.name}</MemberName>
        <MemberSubtitle>{memberData.subtitle}</MemberSubtitle>
        {memberData.location && (
          <MemberLocation>{memberData.location}</MemberLocation>
        )}
      </MemberDetails>
    </ItemHeader>
    <ItemBody>
      <MemberBio>{memberData.bio}</MemberBio>
    </ItemBody>
    <ItemFooter>
      {memberData.instagramprofile && (
        <SocialLink href={memberData.instagramprofile}>
          <IconInstagram />
        </SocialLink>
      )}
      {memberData.twitterprofile && (
        <SocialLink href={memberData.twitterprofile}>
          <IconTwitter />
        </SocialLink>
      )}
      {memberData.facebookprofile && (
        <SocialLink href={memberData.facebookprofile}>
          <IconFacebook />
        </SocialLink>
      )}
      {memberData.linkedinprofile && (
        <SocialLink href={memberData.linkedinprofile}>
          <IconLinkedIn />
        </SocialLink>
      )}
    </ItemFooter>
  </StyledLi>
)

MemberItem.propTypes = {
  memberData: PropTypes.shape({
    name: PropTypes.string,
    subtitle: PropTypes.string,
    photo: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string,
    instagramprofile: PropTypes.string,
    facebookprofile: PropTypes.string,
    twitterprofile: PropTypes.string,
    linkedinprofile: PropTypes.string,
    email: PropTypes.string,
  }),
}

const getFilteredList = (query, list) =>
  list.filter(
    user =>
      user.node.name.toLowerCase().indexOf(query) > -1 ||
      (user.node.location || '').toLowerCase().indexOf(query) > -1 ||
      user.node.bio.toLowerCase().indexOf(query) > -1 ||
      user.node.subtitle.toLowerCase().indexOf(query) > -1
  )

class MembersPage extends React.Component {
  state = {
    searchQuery: '',
  }

  handleSearch = e => {
    this.setState({
      searchQuery: e.target.value.trim().toLowerCase(),
    })
  }

  render() {
    const { searchQuery } = this.state
    const memberList = this.props.data.allMember.edges

    const filteredList = getFilteredList(searchQuery, memberList)

    return (
      <div>
        <SearchContainer>
          <SearchLabel htmlFor="search-input">Search Members</SearchLabel>
          <Input
            value={searchQuery}
            placeholder="e.g. Designer or Writer"
            id="search-input"
            onChange={this.handleSearch}
          />
        </SearchContainer>

        <StyledUl>
          {filteredList.length ? (
            filteredList.map(member => (
              <MemberItem key={member.node.name} memberData={member.node} />
            ))
          ) : (
            <div> No members found </div>
          )}
        </StyledUl>
      </div>
    )
  }
}

MembersPage.propTypes = {
  data: PropTypes.any,
}

// eslint-disable-next-line no-undef
export const memberQuery = graphql`
  query Members {
    allMember {
      edges {
        node {
          photo
          name
          subtitle
          bio
          email
          location
          instagramprofile
          facebookprofile
          twitterprofile
          linkedinprofile
        }
      }
    }
  }
`

export default MembersPage
