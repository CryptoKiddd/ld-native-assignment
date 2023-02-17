import { View, Text, Box,ScrollView, HStack} from 'native-base'
import React from 'react'
import DashboardCustomerSupport from '../components/Dashboard/DashboardCustomerSupport'
import DashboardExtensions from '../components/Dashboard/DashboardExtensions'
import DashboardHeader from '../components/Dashboard/DashboardHeader'
import DashboardIndicators from '../components/Dashboard/DashboardIndicators'
import DashboardInviteFriends from '../components/Dashboard/DashboardInviteFriends'
import DashboardLatestNews from '../components/Dashboard/DashboardLatestNews'
import DashboardReviews from '../components/Dashboard/DashboardReviews'


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