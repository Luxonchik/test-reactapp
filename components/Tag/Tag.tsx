import styles from './Tag.module.scss';
import { TagProps } from './Tag.props';
import cn from 'classnames';
export const Tag = ({children, size = 'sm', className, color = 'ghost', href, ...props}: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.sm]: size == 'sm',
                [styles.md]: size == 'md',
                [styles.ghost]: color == 'ghost',
                [styles.green]: color == 'green',
                [styles.red]: color == 'red',
                [styles.primary]: color == 'primary',
                [styles.gray]: color == 'gray',
            })}
            {...props}
        >{
            href 
            ? <a href={href}>{children}</a>
            : <>{children}</>
        }   
        </div>

    );
}