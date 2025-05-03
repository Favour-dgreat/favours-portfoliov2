import { Box, Flex, SimpleGrid, Text, keyframes } from "@chakra-ui/react";
import React from "react";
import { MainLayout } from "../layouts/MainLayout";

const Blog = () => {
	// Animation for the Loading text
	const loadingAnimation = keyframes`
		0% { opacity: 0.2; }
		50% { opacity: 1; }
		100% { opacity: 0.2; }
	`;

	return (
		<Box w="100%">
			<MainLayout isMobile={true}>
				<SimpleGrid
					columns={1}
					spacing={4}
					padding={["1.5rem", "1.5rem", "1.5rem", "3rem"]}
					mb={["1.5rem", "1.5rem", "1.5rem", "1rem"]}
					mt={["3rem", "3rem", "3rem", "1rem"]}
				>
					<Box padding={["0", "0", "0", "3rem"]}>
						{/* Centered Loading Text */}
						<Flex justify="center" align="center" height="50vh">
							<Text
								fontSize="2xl"
								fontWeight="bold"
								color="rgba(255, 255, 255, 0.8)"
								animation={`${loadingAnimation} 1.5s infinite`}
								fontFamily="Space Grotesk"
							>
								Loading...
							</Text>
						</Flex>
					</Box>
				</SimpleGrid>
			</MainLayout>
		</Box>
	);
};

export default Blog;
