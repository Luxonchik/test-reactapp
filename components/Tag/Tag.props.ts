import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';


export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    children: ReactNode;
    size?: 'sm' | 'md' 
    color?: 'red' | 'green' | 'primary' | 'ghost' | 'gray'
    href?: string; 
}