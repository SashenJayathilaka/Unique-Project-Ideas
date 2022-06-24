import React from "react"

type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as? :E
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> & 
Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

export const Text = <E extends React.ElementType = 'div'>
({ size, color, children, as }: TextProps<E>) => {
    const Component = as || 'div'
    return (
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    )
}