import { Box, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { MainLayout } from "../layouts/MainLayout";

export const Resume = () => {
	const data = [
		"React JS",
		"Next JS",
		"TypeScript",
		"JavaScript",
		"Flutter",
		"Redux",
		"GraphQL",
		"Solidity",
		"CSS3",
		"Git",
		"Responsive Design",
		"Performance",
		"Figma",
		"Agile Development",
	];

	const resumeLink =
		"https://docs.google.com/document/d/17-uuxZ-E2PE8NkDlTJzxyHCze2IHtAmD/edit?usp=sharing&ouid=113270889609624745401&rtpof=true&sd=true";

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
					<Box
						bgColor="rgba(24, 22, 22, 0.5)"
						color="rgba(255, 255, 255, 0.8)"
						fontFamily="Space Grotesk"
						borderRadius="4px"
						width="100%"
						padding="1.5rem"
					>
						<Box>
							<Box display="flex" justifyContent="space-between">
								<Box>
									<Text
										color="rgba(255, 255, 255, 0.8)"
										fontWeight="900"
										fontSize="2rem"
									>
										Favour Adeshina
									</Text>
									<Text
										fontSize="1rem"
										lineHeight="1.8"
										color="gba(255, 255, 255, 0.8)"
										fontWeight="700"
									>
										Mobile & Web Engineer
									</Text>
								</Box>
								<Box>
									<Link
										href={resumeLink}
										download="Favour_Adeshina_Resume.pdf"
										style={{
											boxShadow: "none",
										}}
										isExternal
									>
										<Flex
											alignItems="center"
											color="gba(255, 255, 255, 0.8)"
											fontSize=".85rem"
											fontWeight="400"
										>
											<BiDownload
												style={{
													color: "rgba(255, 255, 255, 0.8)",
													marginRight: ".3rem",
												}}
											/>
											<Text>Download</Text>
										</Flex>
									</Link>
								</Box>
							</Box>

							<br />
							<Text
								fontSize="1rem"
								lineHeight="2"
								color="rgba(255, 255, 255, 0.8)"
								fontWeight="300"
							>
								Web3 Mobile & Web Engineer, passionate about transforming ideas
								into secure, scalable, and decentralized applications. I craft
								responsive user interfaces with a strong focus on seamless user
								experience across devices. Adaptable to any tech stack, I thrive
								in fast-paced environments—building on-chain and off-chain
								solutions that bridge design, functionality, and the future of
								the web.
							</Text>

							<Text
								mt="1rem"
								fontSize="1rem"
								lineHeight="2"
								color="rgba(255, 255, 255, 0.8)"
								fontWeight="300"
							>
								As highlighted in my{" "}
								<Link
									href={resumeLink}
									textDecoration="underline"
									color="rgb(30,144,255)"
									isExternal
								>
									resume
								</Link>
								, I’ve contributed to a wide range of projects—developing
								intuitive, detail-driven user interfaces. I’ve had the
								opportunity to work with modern frameworks like Next.js, Flutter and
								React, and I’m continuously expanding my skill set to stay
								ahead in both Web2 and Web3 technologies.
							</Text>
						</Box>

						<Box mt="2rem">
							<SimpleGrid
								columns={["2", "2", "3", "3", "3"]}
								spacing={6}
								mb={["1.5rem", "1.5rem", "1.5rem", "1rem"]}
								mt={["3rem", "3rem", "3rem", "1rem"]}
							>
								{data.map((item) => {
									return (
										<Box
											bg="rgba(24, 22, 22, 0.5)"
											borderLeft="3px solid"
											borderColor="rgb(30,144,255)"
											p=".5rem"
											textTransform="capitalize"
											fontSize=".85rem"
											fontWeight="600"
											w="max-content"
										>
											<Text>{item}</Text>
										</Box>
									);
								})}
							</SimpleGrid>
						</Box>
					</Box>
				</SimpleGrid>
			</MainLayout>
		</Box>
	);
};
