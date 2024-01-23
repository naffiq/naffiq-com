import * as React from 'react'
import DefaultLayout from '../layouts'
import { ContainerContent } from '../components/Container'

const NotFoundPage = () => (
  <DefaultLayout>
    <ContainerContent>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </ContainerContent>
  </DefaultLayout>
)

export default NotFoundPage
