import React, { useState, useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog'
import { IoIosAddCircle } from 'react-icons/io'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { DialogClose } from '@radix-ui/react-dialog'
import axios from 'axios'
import { empty } from '@prisma/client/runtime/library'
import { useToast } from '@/hooks/use-toast'

function StockDialog({ id }: { id: number }) {
    const [quantity, setQuantity] = useState('')
    const [open, setOpen] = useState(false)
    const { toast } = useToast()
    // Fetch item quantity when the component is mounted or when `id` changes
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(`/api/stock/${id}`, {
                    headers: { 'Content-Type': 'application/json' },
                })
                setQuantity(response.data.quantity || 0)
            } catch (error) {
                console.error('Error fetching stock data:', error)
            }
        }
        fetchItem()
    }, [id])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!quantity) {
            alert('Please enter a valid quantity')
            return
        }

        try {
            const response = await axios.post(
                `/api/stock/${id}`,
                { quantity }, // Payload
                { headers: { 'Content-Type': 'application/json' } } // Headers
            )
            toast({
                variant: "destructive", // If supported by your toast system

                title: "Sucess",
                description: response.data.message
            })
            console.log('Submitting quantity:', response.data.message)
            setQuantity('') // Reset quantity after successful submission
            setOpen(false)
        } catch (error) {
            console.error('Error submitting quantity:', error)
        }
    }

    return (
        <Dialog open={open} >
            <DialogTrigger onClick={() => setOpen(true)}>
            <IoIosAddCircle style={{ fontSize: "30px" }} className="w-14 text-center mt-2" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Quantity</DialogTitle>
                </DialogHeader>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <Input
                        type="number"
                        placeholder="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)} // Bind input to state
                    />

                    <DialogFooter className="sm:justify-start">
                        <div className="flex mt-4 justify-between">
                            <Button type="submit" className="mx-4">
                                Submit
                            </Button>
                            <DialogClose asChild>
                                <Button variant='outline' type="button">Cancel</Button>
                            </DialogClose>
                        </div>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default StockDialog
