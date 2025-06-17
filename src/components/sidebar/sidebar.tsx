import classNames from 'classnames';
import styles from './sidebar.module.scss';

export interface SidebarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sidebar = ({ className }: SidebarProps) => {
    return <div className={classNames(styles.root, className)} aria-rowindex={3}>
        <div className="Sidebar">
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" />
            <ul className="Contacts" style={{
                listStyleType: 'none'
            }}><li>Coffee</li><li>Tea</li><li>Milk</li></ul>
        </div>
    </div>;
};
