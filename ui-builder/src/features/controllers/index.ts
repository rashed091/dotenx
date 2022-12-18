import { AboutLeft } from './about-left'
import { AboutLeft } from './about-left'
import { AboutRight } from './about-right'
import { ListCard } from './list-card'
import {
	ChartArea,
	ChartBar,
	ChartBubble,
	ChartDoughnut,
	ChartLine,
	ChartPie,
	ChartPolarArea,
	ChartRadar,
	ChartScatter,
} from './chart-bar'
import { ComparisonTableSimple } from './comparison-table-simple'
import { CreateForm } from './create-form'
import { CustomersGrid } from './customers-grid'
import { CustomersLogoGrid } from './customers-logo-grid'
import { DividerSimpleTitle } from './divider-simple-title'
import { Details } from './dynamics/details'
import { FaqBasic } from './faq-basic'
import { FaqBasicStyled } from './faq-basic-styled'
import { FeatureCenterCards } from './feature-center-cards'
import { FeatureCenterGrid } from './feature-center-grid'
import { FeatureDetailsLeft } from './feature-details-left'
import { FeatureDetailsRight } from './feature-details-right'
import { FeatureGridImages } from './feature-grid-images'
import { FooterGrid } from './footer-grid'
import { GalleryBasic } from './gallery-basic'
import { GalleryBasicRounded } from './gallery-basic-rounded'
import { GalleryWithTitle } from './gallery-with-title'
import { GalleryWithCaptions } from './gallery-with-caption'
import { HeroCtaLeft } from './hero-cta-left'
import { HeroCtaRight } from './hero-cta-right'
import { HeroFullWidth } from './hero-full-width'
import { HeroParallax } from './hero-parallax'
import { List } from './list'
import { Navbar } from './navbar'
import { NavbarWithAuth } from './navbar-with-auth'
import { PricingSimple } from './pricing-simple'
import { PricingSimple2 } from './pricing-simple-2'
import { SignInBasic } from './sign-in-basic'
import { SignUpBasic } from './sign-up-basic'
import { TeamCenterGrid } from './team-center-grid'
import { TeamRoundCenter } from './team-round-center'
import { TeamRoundLeft } from './team-round-left'
import { TestimonialSimple } from './testimonial-simple'
import { NavbarWithCTA } from './navbar-with-cta'
import { NavbarWithProfile } from './navbar-with-profile'

export const controllers = [
	{
		title: 'About', items: [AboutLeft,
			AboutRight]
	},
	{
		title: 'Charts',
		items: [
			ChartBar,
			ChartArea,
			ChartBubble,
			ChartDoughnut,
			ChartLine,
			ChartPie,
			ChartPolarArea,
			ChartRadar,
			ChartScatter,
		],
	},
	{ title: 'Customers', items: [CustomersLogoGrid, CustomersGrid] },
	{ title: 'Comparison Table', items: [ComparisonTableSimple] },
	{ title: 'FAQ', items: [FaqBasic, FaqBasicStyled] },
	{ title: 'Divider', items: [DividerSimpleTitle] },
	{
		title: 'Features',
		items: [
			FeatureCenterGrid,
			FeatureCenterCards,
			FeatureGridImages,
			FeatureDetailsLeft,
			FeatureDetailsRight,
		],
	},
	{ title: 'Footers', items: [FooterGrid] },
	{
		title: 'Gallery',
		items: [GalleryBasic, GalleryBasicRounded, GalleryWithTitle, GalleryWithCaptions],
	},
	{
		title: 'Hero', items: [HeroFullWidth, HeroCtaLeft,
			HeroCtaRight, HeroParallax]
	},
	{ title: 'Navbar', items: [Navbar, NavbarWithAuth, NavbarWithCTA, NavbarWithProfile] },
	{ title: 'Pricing', items: [PricingSimple, PricingSimple2] },
	{ title: 'Sign In/Up', items: [SignInBasic, SignUpBasic] },
	{ title: 'Team', items: [TeamCenterGrid, TeamRoundCenter, TeamRoundLeft] },
	{ title: 'Testimonial', items: [TestimonialSimple] },
	{
		title: 'Dynamic', items: [
			// CreateForm, List,
			ListCard, Details]
	},

] as const