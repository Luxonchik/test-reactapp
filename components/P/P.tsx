import styles from './P.module.scss';
import { PProps } from './P.props';
import cn from 'classnames';
export const P = ({children, size = 'sm', className, ...props}: PProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.sm]: size == 'sm', 
                [styles.md]: size == 'md', 
                [styles.xl]: size == 'xl', 

            })}
            {...props}
        >
        {children}    
        </p>
    );
}