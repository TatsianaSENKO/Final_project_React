import { createPortal } from "react-dom"
import { useRef, useEffect } from "react"

function CartNullModal({ children, open }) {

    const dialog = useRef()

    useEffect(() => {
        if (open) {
            dialog.current.showModal()

        } else {
            dialog.current.close()
        }

    }, [open])

	return createPortal(
        <dialog ref={dialog}>{children}</dialog>,
        document.getElementById('modal')
	)
}
export default CartNullModal
