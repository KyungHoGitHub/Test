import './App.css';
import {
    AppstoreOutlined,
    LaptopOutlined,
    MailOutlined,
    NotificationOutlined,
    SettingOutlined,
    UserOutlined
} from '@ant-design/icons';
import {Avatar, Breadcrumb, Button, Divider, Layout, List, Menu, Space, Steps, Table, Tabs, Tag, theme} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Title from "antd/es/skeleton/Title";


function App() {
    const columns = [
        {
            title: '평가자',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: '상태',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: '1차[점수]',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '2차[점수]',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: '유경호',
            age: 3,
            address: '1',
            tags: ['완료', ],
        },
        {
            key: '2',
            name: '김철수',
            age: 2,
            address: '1 ',
            tags: ['완료'],
        },
        {
            key: '3',
            name: '배철수',
            age: 5,
            address: '7',
            tags: ['완료'],
        },
    ];

    const insadata = [
        {
            key: '1',
            name: '유경호',
            age: 3,
            address: '1',
            current: 0,
            status: 'error',
            tags: ['진행중', ],
        },
        {
            key: '2',
            name: '김철수',
            age: 2,
            address: '1 ',
            current: 2,
            tags: ['완료'],
        },
    ];


    const {
        token: { colorBgContainer },
    } = theme.useToken();

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const items = [
        {
            title: '미진행',
        },
        {
            title: '진행중',
        },
        {
            title: '완료',
        },
    ];

    const onClick = (e) => {
        console.log('click ', e);
    };



    return (
        <Layout>
            <Header>


            </Header>
            <Layout>

                <Sider width={350} style={{ background: colorBgContainer }}>
                    {/*<Menu*/}
                    {/*    onClick={onClick}*/}
                    {/*    style={{*/}
                    {/*        width: 200,*/}
                    {/*    }}*/}
                    {/*    defaultSelectedKeys={['1']}*/}
                    {/*    defaultOpenKeys={['sub1']}*/}
                    {/*    mode="inline"*/}
                    {/*    items={items}*/}
                    {/*/>*/}
                    <div>
                        {/*<Tabs*/}
                        {/*    defaultActiveKey="1"*/}

                        {/*    items={[*/}
                        {/*        {*/}
                        {/*            label: `Tab 1`,*/}
                        {/*            key: '1',*/}
                        {/*            children: `Content of Tab Pane 1`,*/}
                        {/*        },*/}
                        {/*        {*/}
                        {/*            label: `Tab 2`,*/}
                        {/*            key: '2',*/}
                        {/*            children: `Content of Tab Pane 2`,*/}
                        {/*        },*/}
                        {/*        {*/}
                        {/*            label: `Tab 3`,*/}
                        {/*            key: '3',*/}
                        {/*            children: `Content of Tab Pane 3`,*/}
                        {/*        },*/}
                        {/*    ]}*/}
                        {/*/>*/}
                    <List
                        itemLayout="horizontal"
                        dataSource={insadata}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={ <Avatar icon={<UserOutlined />} />}
                                    title={<a href="https://ant.design">{"유경호"}</a>}
                                    description={"IT전략본부/R&D2팀"}
                                />
                                <Steps
                                    style={{
                                        marginTop: 8,
                                    }}
                                    type="inline"
                                    current={item.current}
                                    status={item.status}
                                    items={items}
                                />

                            </List.Item>

                        )}

                    />
                    </div>

                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                    {/*    <Breadcrumb.Item>내 인사평가</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>인사평가 목록 조회</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>성과평가문서</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    <h2>유경호의 인사평가 문서</h2>

                    <h3>평가문서 종류 : 성과평과 </h3>
                    <Divider></Divider>
                    <Content
                        style={{

                            padding: 24,
                            margin: 10,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <Table columns={columns} dataSource={data} />
                        <Button style={{float:'right'}} >목록</Button>
                    </Content>

                </Layout>
            </Layout>
        </Layout>
    );
};

export default App;
