import { Image, HStack, Box, Text, Flex ,Link} from "@chakra-ui/react"
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import Footers from './Footers'
const Data = [
  {
    logo: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/wm_main_logo.png",
    text: [
      'Pricing',
      'Contact us',
      'Templates',
      'SMB',
      'Enterprise',
      'Nonprofits',
      'Apps marketplace',
      '24/7 support'
    ]
  },
  {
    heading: 'Features',
    text: [
      'Docs',
      'Integrations',
      'Automations',
      'Files',
      'Dashboards',
      'Kanban',
      'Gantt',
    
    ]
  },
  {
    heading: 'monday products',
    text: [
      'monday work management',
      'monday sales CRM',
      'monday marketer',
      'monday projects',
      'monday dev',
      'More by monday.com',
      'Canvas',
      'WorkForms'
    ]
  },
  {
    heading: 'Use cases',
    text: [
      'Marketing',
      'Project management',
      'Sales',
      'Developers',
      'HR',
      'IT',
      'Operations',
      'Constructions',
      'Education'
    ]
  },
  {
    heading: 'Company',
    text: [
      'About us',
      "Careers - We're hiring!",
      'monday-U',
      'Press',
      'Customer stories',
      'Become a partner',
      'Sustainability & ESG',
      'Affiliates',
      'Digital Lift',
      'Investors relations'
      
    ]
  },
  {
    heading: 'Resources',
    text: [
      'Help Center',
      "Community",
      'Blog',
      'Webinars',
      'Startup for startup',
      'Global events',
      'App development',
      'Find a partner',
      'Compare'
      
    ]
  }
]

const Footer = () => {
  return (
    <>
    
        <HStack p="0px">
          <Box p="7">
           <Link to="/">
           <Image
              width="170px"
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"
            ></Image>
            </Link>
          </Box> </HStack> 

      <Box bgColor={'white'} color={'grey'} marginTop='-20'>
        <Flex flexDir={'row'} borderBottom={'1px solid black'} px={'9.5%'} m={'auto'} mt={'5rem'} flexWrap={'wrap'}  >
          {
            Data.map((e) => (
              <Footers heading={e.heading} text={e.text}/>
            ))
          }
        </Flex>
          
      </Box>
    </>
  )
}
export default Footer

