/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Children } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { withRouter } from 'next/router'

const ActiveLink = ({ router, children, ...props }: any) => {
  const routes = useRouter()
  const isCurrentRoute = routes.asPath === props.href

  const child = Children.only(children)

  let className = child.props.className || null

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className !== null ? className : ''} ${
      props.activeClassName
    }`.trim()
  }

  delete props.activeClassName

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>
}

export default withRouter(ActiveLink)
