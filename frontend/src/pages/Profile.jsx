import React from 'react'
import {Tab, Tabs, TabList, TabPanels, TabPanel, ListItem, ListIcon, List} from "@chakra-ui/react"
import { WarningIcon, ChatIcon, CheckCircleIcon, EmailIcon} from '@chakra-ui/icons'

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{color: 'white', bg: 'purple.400'}}>Account Info</Tab>
        <Tab _selected={{color: 'white', bg: 'purple.400'}}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              User
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Description...
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
