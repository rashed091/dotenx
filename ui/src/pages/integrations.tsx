/** @jsxImportSource @emotion/react */
import { BsPlusSquare } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import { Button } from '../components/button'
import { Layout } from '../components/layout'
import { Modal } from '../components/modal'
import { IntegrationList } from '../containers/integration-list'
import { NewIntegration } from '../containers/new-integration'
import { Modals, useModal } from '../hooks/use-modal'

export default function Integrations() {
	const location = useLocation()

	return (
		<Layout pathname={location.pathname} header={<Header />}>
			<div css={{ padding: '48px 96px', flexGrow: 1 }}>
				<IntegrationList />
			</div>
			<Modal kind={Modals.NewIntegration}>
				<NewIntegration />
			</Modal>
		</Layout>
	)
}

function Header() {
	const modal = useModal()

	return (
		<div
			css={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'end',
				height: '100%',
				padding: '10px 20px',
			}}
		>
			<Button
				css={{
					padding: '4px 10px',
					fontSize: '16px',
				}}
				onClick={() => modal.open(Modals.NewIntegration)}
			>
				New integration
				<BsPlusSquare css={{ marginLeft: 10 }} />
			</Button>
		</div>
	)
}