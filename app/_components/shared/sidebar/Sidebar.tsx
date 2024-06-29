'use client';

import { FC, useState } from 'react';
import classNames from 'classnames';
import { XCircle, Menu, Settings, User, Home } from 'lucide-react';
import SidebarLink from './SidebarLink';
import TooltipHelper from '../TooltipHelper';

const Sidebar: FC = () => {
    const [collapsed, setSidebarCollapsed] = useState(false);

    return (
        <div
            className={classNames({
                'grid min-h-screen': true,
                'grid-cols-sidebar': !collapsed,
                'grid-cols-sidebar-collapsed': collapsed,
                'transition-[grid-template-columns] duration-300 ease-in-out':
                    true,
            })}
        >
            <div className='bg-zinc-50 text-black dark:bg-zinc-800 dark:text-white'>
                <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
                    {collapsed === true ? (
                        <Menu className='h-7 w-7' />
                    ) : (
                        <XCircle className='h-7 w-7' />
                    )}
                </button>
                {collapsed === false ? (
                    <>
                        <div>
                            <SidebarLink
                                icon={<Settings />}
                                linkHref='/settings'
                                linkText='Settings'
                            />

                            <SidebarLink
                                icon={<User />}
                                linkHref='/profile'
                                linkText='Profile'
                            />
                            <SidebarLink
                                icon={<Home />}
                                linkHref='/'
                                linkText='Dashboard'
                            />
                        </div>
                    </>
                ) : (
                    <div>
                        <div className='mt-8'>
                            <div className='mt-8'>
                                <TooltipHelper
                                    icon={<Settings />}
                                    linkH='/settings'
                                    tooltipText='Settings'
                                />
                            </div>
                            <div className='mt-8'>
                                <TooltipHelper
                                    icon={<User />}
                                    linkH='/profile'
                                    tooltipText='Profile'
                                />
                            </div>
                            <div className='mt-8'>
                                <TooltipHelper
                                    icon={<Home />}
                                    linkH='/'
                                    tooltipText='Dashboard'
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
