import { lazy, Suspense } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    color: #1e293b;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }
`

const HeroSection = lazy(() => import('./components/HeroSection'))
const WhyItMatters = lazy(() => import('./components/WhyItMatters'))
const Statistics = lazy(() => import('./components/Statistics'))
const CampaignDetails = lazy(() => import('./components/CampaignDetails'))
const JourneySection = lazy(() => import('./components/JourneySection'))
const BeneficiariesSection = lazy(() => import('./components/BeneficiariesSection'))

const Community = lazy(() => import('./components/Community'))
const TeamSection = lazy(() => import('./components/TeamSection'))

const Footer = lazy(() => import('./components/Footer'))

const AppContainer = styled.div`
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
`

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Suspense fallback={<Loading>Loading...</Loading>}>
        <HeroSection />
        <WhyItMatters />
        <Statistics />
        <CampaignDetails />
        <JourneySection />
    
        <BeneficiariesSection />
     
        <Community />
        <TeamSection />

        <Footer />
        </Suspense>
      </AppContainer>
    </>
  )
}

export default App
