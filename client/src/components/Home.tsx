import NavBarLink from '../routes/NavBarLink'
import ROUTES from '../routes/routesModel'

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
    <div>Home</div>
        <NavBarLink to={ROUTES.LOGIN}><button>login</button></NavBarLink>
        <NavBarLink to="/register"><button>register</button></NavBarLink>
        <NavBarLink to="/trips"><button>trips</button></NavBarLink>
    </div>

  )
}