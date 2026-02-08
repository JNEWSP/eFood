import { Container } from './styles'
import { cores } from '../../styles'

const Loader = () => (
  <Container>
    <div 
      style={{
        border: `4px solid ${cores.corSecundaria}`,
        borderTop: `4px solid ${cores.corPrincipal}`,
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        animation: 'spin 1s linear infinite'
      }}
    />
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </Container>
)

export default Loader