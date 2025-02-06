export default function FormContact() {
    return (
        <form className='grid gap-2 bg-red-200 text-xl font-normal p-5 rounded-xl'>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-2 w-full'>
                    <label for="f1">Name</label>
                    <input id="f1" type='text' placeholder='นายมานะ' className='border p-2 text-lg rounded-md' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label for="f2">Email</label>
                    <input id="f2" type='email' placeholder='mana@test.com' className='border p-2 text-lg rounded-md' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label for="f3">Phone</label>
                    <input id="f3" type='phone' placeholder='012-345-6789' className='border p-2 text-lg rounded-md' />
                </div>
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <label for="f3">บอกสิ่งที่คุณต้องการ</label>
                <textarea id="f3" placeholder='ตัวอย่าง: ฉันต้องการเริ่มต้นธุรกิจขายอาหารออนไลน์ ฉันอยากได้สติ๊กเกอร์โลโก้ร้านและ เว็บไซต์โปรโมทร้าน' className='border p-2 h-20 text-lg rounded-md' />
            </div>
            <button className='bg-red-600 font-bold text-white text-base w-fit mt-2 px-5 py-2 rounded-full flex gap-2 items-center hover:opacity-90'>
                Submit
            </button>
        </form>
    )
}