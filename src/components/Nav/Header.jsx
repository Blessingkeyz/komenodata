import React from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <MenuToggle toggle={toggle} isOpen={isOpen} />
    )
}

export default Header