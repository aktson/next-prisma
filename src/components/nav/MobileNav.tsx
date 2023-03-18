/***** IMPORTS *****/
import React, { FC } from "react";
import PrimaryBtn from "../common/buttons/PrimaryBtn";
import LinkElement from "../common/LinkElement";
import {
	createStyles,
	Header,
	HoverCard,
	Group,
	Button,
	UnstyledButton,
	Text,
	SimpleGrid,
	ThemeIcon,
	Anchor,
	Divider,
	Center,
	Box,
	Burger,
	Drawer,
	Collapse,
	ScrollArea,
	rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconNotification, IconCode, IconBook, IconChartPie3, IconFingerprint, IconCoin, IconChevronDown } from "@tabler/icons-react";
import SecondaryBtn from "../common/buttons/SecondaryBtn";

/***** INTERFACES *****/
interface MobileNavProps {}

const useStyles = createStyles((theme) => ({
	link: {
		display: "flex",
		alignItems: "center",
		height: "100%",
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		textDecoration: "none",
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontWeight: 500,
		fontSize: theme.fontSizes.sm,

		[theme.fn.smallerThan("sm")]: {
			height: rem(42),
			display: "flex",
			alignItems: "center",
			width: "100%",
		},

		...theme.fn.hover({
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
		}),
	},

	subLink: {
		width: "100%",
		padding: `${theme.spacing.xs} ${theme.spacing.md}`,
		borderRadius: theme.radius.md,

		...theme.fn.hover({
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
		}),

		"&:active": theme.activeStyles,
	},

	dropdownFooter: {
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
		margin: `calc(${theme.spacing.md} * -1)`,
		marginTop: theme.spacing.sm,
		padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
		paddingBottom: theme.spacing.xl,
		borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`,
	},

	hiddenMobile: {
		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	hiddenDesktop: {
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},
}));

/***** COMPONENT-FUNCTION *****/
const MobileNav: FC<MobileNavProps> = (): JSX.Element => {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
	const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
	const { classes, theme } = useStyles();

	/** return statement */
	return (
		<>
			<Group position="apart" sx={{ padding: "1em" }}>
				<h2>LOGO</h2>
				<Group spacing={16} className={classes.hiddenMobile}>
					<LinkElement href="/"> Home</LinkElement>
					<LinkElement href="/about"> About</LinkElement>
					<LinkElement href="#">Marketplace</LinkElement>
					<LinkElement href="#"> Company</LinkElement>
				</Group>

				<Group className={classes.hiddenMobile} spacing="0.5em">
					<PrimaryBtn>Sign up</PrimaryBtn>
					<SecondaryBtn>Log in</SecondaryBtn>
				</Group>

				<Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
			</Group>

			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size="100%"
				padding="md"
				title="Navigation"
				className={classes.hiddenDesktop}
				zIndex={1000000}>
				<ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
					<Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

					<LinkElement href="/"> Home</LinkElement>
					<LinkElement href="/about"> About</LinkElement>

					<UnstyledButton className={classes.link} onClick={toggleLinks}>
						<Center inline>
							<Box component="span" mr={5}>
								Features
							</Box>
							<IconChevronDown size={16} color={theme.fn.primaryColor()} />
						</Center>
					</UnstyledButton>
					{/* <Collapse in={linksOpened}>{links}</Collapse> */}
					<LinkElement href="#">Marketplace</LinkElement>
					<LinkElement href="#"> Company</LinkElement>

					<Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

					<Group position="center" grow pb="xl" px="md">
						<PrimaryBtn>Sign up</PrimaryBtn>
						<SecondaryBtn>Log in</SecondaryBtn>
					</Group>
				</ScrollArea>
			</Drawer>
		</>
	);
};

/***** EXPORTS *****/
export default MobileNav;
