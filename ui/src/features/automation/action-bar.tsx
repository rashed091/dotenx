import { DragEvent } from 'react'
import { BsFillCalendar3WeekFill, BsUiChecksGrid } from 'react-icons/bs'
import {
	IoAdd,
	IoPlayOutline,
	IoSaveOutline,
	IoSwapVertical,
	IoTrashOutline,
} from 'react-icons/io5'
import { NodeType } from '../flow'
import { Modals } from '../hooks'
import { Modal } from '../ui'
import { IconButton } from '../ui/icon-button'
import { SaveForm } from './save-form'
import { useActionBar } from './use-action-bar'

export function ActionBar() {
	const { onDelete, onRun, selectedAutomation, modal, onLayout, newAutomation } = useActionBar()
	const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
		event.dataTransfer.setData('application/reactflow', nodeType)
		event.dataTransfer.effectAllowed = 'move'
	}

	return (
		<>
			<div className="fixed right-10 top-[35%] -translate-y-[35%] z-10 flex flex-col gap-4 items-center">
				<div
					className="p-2 text-2xl text-white bg-purple-600 rounded shadow-sm cursor-grab"
					onDragStart={(event) => onDragStart(event, NodeType.Default)}
					draggable
				>
					<BsUiChecksGrid />
				</div>
				<div
					className="p-2 text-2xl text-white rounded shadow-sm bg-fuchsia-600 cursor-grab"
					onDragStart={(event) => onDragStart(event, NodeType.Trigger)}
					draggable
				>
					<BsFillCalendar3WeekFill />
				</div>
				<div className="flex flex-col gap-2 px-1 py-2 rounded shadow-sm bg-gray-50">
					<IconButton tooltip="Run" onClick={onRun} disabled={!selectedAutomation}>
						<IoPlayOutline />
					</IconButton>
					<IconButton tooltip="Save" onClick={() => modal.open(Modals.SaveAutomation)}>
						<IoSaveOutline />
					</IconButton>
					<IconButton tooltip="Sort" onClick={() => onLayout('TB')}>
						<IoSwapVertical />
					</IconButton>
					<IconButton tooltip="New" onClick={newAutomation}>
						<IoAdd />
					</IconButton>
					<IconButton tooltip="Delete" disabled={!selectedAutomation} onClick={onDelete}>
						<IoTrashOutline />
					</IconButton>
				</div>
			</div>
			<Modal title="New Automation" kind={Modals.SaveAutomation}>
				<SaveForm />
			</Modal>
		</>
	)
}