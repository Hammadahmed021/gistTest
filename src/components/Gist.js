import GistHeader from './GistHeader'
import GistBody from './GistBody'
import styled from 'styled-components'


const Gist = ({ gist }) => <>
<GistListWrapper>


<GistHeader />
<GistBody />
</GistListWrapper>
 </>;

export default Gist

const GistListWrapper = styled.div`
  width: 35%;
  margin: auto;
  padding: 10px;
  padding-bottom: 20px;
    border-bottom: 2px solid #efefef;
`