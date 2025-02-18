export default function FormContact() {
    return (
        <form action="https://api.sheetmonkey.io/form/eCWuSuQPbgsSs2phUGcVKf" method="post" className='grid gap-2 bg-gradient-to-t from-red-100 from-10% via-red-300 via-30% to-red-400 to-90% text-md 2xl:text-xl font-normal p-5 rounded-xl'>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-2 w-full'>
                    <label for="f1">ชื่อ</label>
                    <input id="f1" name="name" type='text' placeholder='นายมานะ' className='border p-2 text-md 2xl:text-lg rounded-md' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label for="f2">อีเมล</label>
                    <input id="f2" name="email" type='email' placeholder='mana@test.com' className='border p-2 text-md 2xl:text-lg rounded-md' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label for="f3">เบอร์ติดต่อ</label>
                    <input id="f3" name="phone" type='phone' placeholder='012-345-6789' className='border p-2 text-md 2xl:text-lg rounded-md' />
                </div>
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <label for="f3">เล่าให้เราฟังสั้น ๆ เกี่ยวกับโครงการของคุณ</label>
                <textarea id="f3" name="detail" placeholder='ตัวอย่าง: ฉันต้องการเริ่มต้นธุรกิจขายอาหารออนไลน์ ฉันอยากได้สติ๊กเกอร์โลโก้ร้านและ เว็บไซต์โปรโมทร้าน' className='border p-2 h-28 text-md 2xl:text-lg rounded-md' />
            </div>
            <button className='bg-red-600 font-bold text-white text-base w-fit mt-2 px-5 py-2 rounded-full flex gap-2 items-center hover:opacity-90'>
                Submit
            </button>
        </form>
    )
}