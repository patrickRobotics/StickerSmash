import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

import CustomDrawerContent from '@/components/CustomDrawerContent';

export default function _layout() {
  return <Drawer drawerContent={CustomDrawerContent}>
    <Drawer.Screen
        name="home"
        options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({size, color})=>(
                <Ionicons name='home' size={size} color={color} />
            )

        }}
    />
    <Drawer.Screen
        name="index"
        options={{
            drawerLabel: 'About',
            title: 'About',
            drawerIcon: ({size, color})=>(
                <Ionicons name='information' size={size} color={color} />
            )

        }}
    />

</Drawer>
}
