import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from 'react-pro-sidebar';
  import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart, FaBars, FaHome } from 'react-icons/fa';
  import sidebarBg from '../../assets/bg2.jpg';
  import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const SideBarAdmin = ({ image, collapsed, toggled, handleToggleSidebar, setcollapsed }) => {
    return(
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <FaBars
                            style={{
                                marginRight: '1rem',
                                cursor: 'pointer'
                            }}
                            onClick={()=> setcollapsed(!collapsed)}
                        />
                        Quizz
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                            suffix={<span className="badge red">New</span>}
                        >
                            dashboard
                            <Link to='/admin'/>
                        </MenuItem>
                        <MenuItem icon={<FaGem />}> components </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            suffix={<span className="badge yellow">3</span>}
                            icon={<FaRegLaughWink />}
                            title='Features'
                        >
                            <MenuItem>
                                Quản lý users
                                <Link to="/admin/manage-users"/>
                            </MenuItem>
                            <MenuItem>Quản lý bài quiz</MenuItem>
                            <MenuItem>Quản lý câu hỏi</MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <NavLink
                            to="/"
                            // target="_blank"
                            className="sidebar-btn"
                        >
                            <FaHome/>
                        </NavLink>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}
export default SideBarAdmin;