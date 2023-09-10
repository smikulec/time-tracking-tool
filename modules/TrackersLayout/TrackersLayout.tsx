'use client';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import DailyCalendarIcon from '../../public/icons/daily_calendar.svg';
import StopwatchIcon from '../../public/icons/stopwatch.svg';
import StopIcon from '../../public/icons/stop.svg';
import EditIcon from '../../public/icons/edit.svg';
import TrashIcon from '../../public/icons/trash.svg';
import StartIcon from '../../public/icons/start.svg';

const getFormattedDate = (date: Date) => {
	// Get the day, month, and year components
	const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits (e.g., '05' instead of '5')
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1 (e.g., '09' instead of '8')
	const year = date.getFullYear();

	// Create the formatted date string in DD.MM.YYYY format
	return `${day}.${month}.${year}.`;
};

const RowActions = () => {
	return (
		<div className='table__actions'>
			<Button rounded text icon={<StartIcon />} />
			<Button rounded text icon={<StopIcon />} />
			<Button rounded text icon={<EditIcon />} />
			<Button rounded text icon={<TrashIcon />} />
		</div>
	);
};

export const TrackersLayout = () => {
	const today = new Date();
	const formattedDate = getFormattedDate(today);

	const items = [
		{
			timeLogged: '1:23:23',
			description: 'Task 123 Jira lorem ipsum dolor sit amet ',
			actions: <RowActions />,
		},
		{
			timeLogged: '1:23:23',
			description: 'Task 123 Jira lorem ipsum dolor sit amet ',
			actions: <RowActions />,
		},
		{
			timeLogged: '1:23:23',
			description: 'Task 123 Jira lorem ipsum dolor sit amet ',
			actions: <RowActions />,
		},
	];

	return (
		<div className='trackers__container'>
			<div className='trackers__title'>
				<DailyCalendarIcon />
				<h1>Today ({formattedDate})</h1>
			</div>
			<div className='trackers__actions'>
				<Button
					severity='secondary'
					icon={<StopwatchIcon className='trackers__icon' />}
					iconPos='left'>
					Start new timer
				</Button>
				<Button icon={<StopIcon className='trackers__icon' />} iconPos='left'>
					Stop all
				</Button>
			</div>
			<div className='trackers__table'>
				<DataTable value={items}>
					<Column
						field='timeLogged'
						header='Time logged'
						style={{
							width: '220px',
						}}></Column>
					<Column field='description' header='Description'></Column>
					<Column
						field='actions'
						header='Actions'
						style={{ width: '230px' }}></Column>
				</DataTable>
			</div>
		</div>
	);
};
