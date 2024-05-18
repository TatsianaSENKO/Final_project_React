import { createPortal } from "react-dom"
import { useRef, useEffect } from "react"

import "./SubscriptionModal.css"


function SubscriptionModal({ children, open }) {

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
export default SubscriptionModal
