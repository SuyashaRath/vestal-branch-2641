import React from 'react';
import One from "./one";
import {Box, Flex} from '@chakra-ui/react';

const Three = () => {
    return (
        <Box>
            <Flex>
                <One/>
            </Flex>
            <h2>Notification</h2>
        </Box>
    );
}

export default Three;
