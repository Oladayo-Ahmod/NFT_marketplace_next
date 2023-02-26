import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'
import nfts  from './nfts'
import  users  from './users'

export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,
  nfts,
  users,
  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
 
]
