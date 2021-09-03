import React from 'react'

const TabItemButton = () => {
    return (
        <Tab.Screen options={{
            tabBarIcon: ({ focused }) => (
                <TabIcon img={require('../../../assets/icon/home.png')} />
            )
        }} name="Home" component={Home} />
    )
}

export default TabItemButton
