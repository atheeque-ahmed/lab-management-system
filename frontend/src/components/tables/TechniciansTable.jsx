import React from 'react';
import { Table, Button, ConfigProvider, Empty, Tag } from 'antd';
import moment from 'moment';

const columns = [
    {
        title: 'Test',
        dataIndex: ['test'],
    },
    {
        title: 'Date',
        dataIndex: ['appointmentDate'],
        render: (date) => moment(date).format('L'),
    },
    {
        title: 'Time',
        dataIndex: ['appointmentDate'],
        render: (start_time) => moment(start_time).format('LT'),
    },
    {
        title: 'Status',
        dataIndex: ['status'],
        render: (record) => (
            <Tag color="green">
                {record}
            </Tag>
        ),
    },
    {
        title: 'View',
        dataIndex: 'join now',
        render: (_, record) => (
            <Button htmlType="submit" type="link">
                View
            </Button>
        ),
    },
];

const TechniciansTable = ({ technicians, loading }) => {
    return (
        <div>
            <ConfigProvider renderEmpty={() => <Empty description="No Schedules Found" />}>
                <Table
                    loading={loading}
                    columns={columns}
                    dataSource={technicians}
                    pagination={{ defaultPageSize: 4, position: ['bottomCenter'] }}
                />
            </ConfigProvider>          
        </div>
    );
};

export default TechniciansTable;
