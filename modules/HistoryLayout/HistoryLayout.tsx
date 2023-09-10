'use client';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

import EditIcon from '../../public/icons/edit.svg';
import TrashIcon from '../../public/icons/trash.svg';
import DailyCalendarIcon from '../../public/icons/daily_calendar.svg';

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';

const RowActions = () => {
	return (
		<div className='table__actions'>
			<Button rounded text icon={<EditIcon />} />
			<Button rounded text icon={<TrashIcon />} />
		</div>
	);
};

export const HistoryLayout = () => {
	const items = [
		{
			date: '12.01.2023.',
			timeTracked: '1:23:23',
			description: 'Task 123 Jira lorem ipsum dolor sit amet ',
			actions: <RowActions />,
		},
		{
			date: '12.01.2023.',
			timeTracked: '1:23:23',
			description: 'Task 123 Jira lorem ipsum dolor sit amet ',
			actions: <RowActions />,
		},
		{
			date: '12.01.2023.',
			timeTracked: '1:23:23',
			description: 'Task 123 Jira lorem ipsum dolor sit amet ',
			actions: <RowActions />,
		},
	];
	return (
		<div className='trackers__container'>
			<div className='trackers__title'>
				<h1>Trackers History</h1>
			</div>
			<Card className='filters'>
				<div className='filters__label'>
					<label htmlFor='startDate'>Start date</label>
					<Calendar
						id='startDate'
						showIcon
						icon={<DailyCalendarIcon />}
						pt={{
							dropdownButton: {
								root: { className: 'p-button-text' },
							},
						}}
						readOnlyInput
					/>
				</div>
				<div className='filters__label'>
					<label htmlFor='endDate'>End date</label>
					<Calendar
						id='endDate'
						showIcon
						icon={<DailyCalendarIcon />}
						pt={{
							dropdownButton: {
								root: { className: 'p-button-text' },
							},
						}}
						readOnlyInput
					/>
				</div>
				<div className='filters__label'>
					<label htmlFor='description'>Description contains</label>
					<InputText id='description' />
				</div>
			</Card>
			<div className='trackers__table'>
				<DataTable value={items}>
					<Column
						field='date'
						header='Date'
						style={{
							width: '220px',
						}}></Column>
					<Column
						field='timeTracked'
						header='Time tracked'
						style={{
							width: '230px',
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
