import {classNames} from "helpers/classNames/classNames";
import styles from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
  PRIMARY = 'primary',
    SECONDARY = 'secondary'
}
interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        theme = AppLinkTheme.PRIMARY,
        className,
        children,
        ...rest
    } = props;

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            {...rest}
        >
            {children}
        </Link>
    );
};

