import React from 'react'
import NavBarLink from '../routes/NavBarLink'

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
    <div>Home</div>
        <NavBarLink to="/login"><button>login</button></NavBarLink>
        <NavBarLink to="/register"><button>register</button></NavBarLink>
        <NavBarLink to="/trips"><button>trips</button></NavBarLink>
    </div>

  )
}