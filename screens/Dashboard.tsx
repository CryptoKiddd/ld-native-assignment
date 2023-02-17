import { View, Text, Box,ScrollView, HStack} from 'native-base'
import React from 'react'
import DashboardCustomerSupport from '../components/DashboardCustomerSupport'
import DashboardExtensions from '../components/DashboardExtensions'
import DashboardHeader from '../components/DashboardHeader'
import DashboardIndicators from '../components/DashboardIndicators'
import DashboardInviteFriends from '../components/DashboardInviteFriends'
import DashboardLatestNews from '../components/DashboardLatestNews'
import DashboardReviews from '../components/DashboardReviews'


const Dashboard = () => {
  return (
    <ScrollView  >

   <DashboardHeader />

   <Box px='4' pb='20'>
   <DashboardIndicators />
   <DashboardLatestNews />
   <DashboardExtensions />
   <DashboardReviews />
   <DashboardCustomerSupport />
   <DashboardInviteFriends />
   </Box>



    </ScrollView>
  )
}

export default Dashboard