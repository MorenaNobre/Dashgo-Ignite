import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Morena Nobre</Text>
          <Text color="gray.300" fontSize="small">
            morenagnobre@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Morena Nobre"
        src="https://github.com/morenanobre.png"
      />
    </Flex>
  );
}
