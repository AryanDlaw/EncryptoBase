import classNames from 'classnames';
import styles from './profile-segment.module.scss';

export interface Profile_SegmentProps {
    className?: string;
    title: string;
    price: number;
    images: string[];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Profile_Segment = ({ className }: Profile_SegmentProps) => {
    return <div className={classNames(styles.root, className)}>
        <div />
    </div>;
};
