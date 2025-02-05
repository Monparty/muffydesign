export default function FormContact() {
    return (
        <form className='grid gap-2 bg-red-200 p-5 rounded-xl'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2 w-full'>
                    <label for="f1">Name</label>
                    <input id="f1" type='text' placeholder='Your name' className='border p-2 font-light' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label for="f2">Email</label>
                    <input id="f2" type='email' placeholder='Your name' className='border p-2 font-light' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label for="f3">Phone</label>
                    <input id="f3" type='phone' placeholder='Your phone' className='border p-2 font-light' />
                </div>
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label for="f3">Message</label>
                <textarea id="f3" placeholder='How can we help?' className='border p-2 h-20 font-light' />
            </div>
            <button className='bg-red-600 text-white w-fit mt-2 px-5 py-2 rounded-full flex gap-2 items-center'>
                Submit
            </button>
        </form>
    )
}