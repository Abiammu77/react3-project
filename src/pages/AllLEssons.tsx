import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { useState } from "react"
import { MyHook } from "../components/MyHook"
import { SocialMedisSharing } from "../components/reactShare/SocialMedisSharing"
import { MyProps } from "../components/props/MyProps"
import { MYuseEffect } from "../components/hooks/MYuseEffect"

export const AllLEssons: React.FC<{}> = () => {
    let [val, setVal] = useState('3')
    return <Box>
        <h1>all lessons</h1>
        <TabContext value={`${val}`}>
            <TabList onChange={(e, num) => { setVal(num) }}>
                <Tab label="useState" value="1" />
                <Tab label="fragments" value="2" />
                <Tab label="sovial share" value="3" />
                <Tab label="props(argument)" value="4" />
                <Tab label="useEffect" value={"5"}/>
            </TabList>
            <TabPanel value={"1"}>
                <MyHook />
            </TabPanel>
            <TabPanel value={"2"}>
                &lt;  and &gt;
            </TabPanel>
            <TabPanel value={"3"}>
                <SocialMedisSharing />
            </TabPanel>
            <TabPanel value={"4"}>
               <MyProps/> 
            </TabPanel>

            <TabPanel value={"5"}>
                <MYuseEffect/>
            </TabPanel>
        </TabContext>

    </Box>
}