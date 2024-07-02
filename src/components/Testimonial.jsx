import React from 'react';

const cards = [
    {
        id: 1,
        image: '/public/testimonial.jpg',
        name: 'Mr Amit Kumar (Asst. General Manager)',
        company: 'Tafcon Projects India PVT. LTD.',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero deleniti aliquam at iste voluptas, harum explicabo, iusto recusandae nisi nostrum, qui hic suscipit quidem sint animi accusantium ducimus unde quae nemo corrupti ullam tenetur ipsam! Enim vel vitae autem ab consequuntur perferendis quas reprehenderit sint, asperiores, incidunt cupiditate quisquam.",
    },
    {
        id: 2,
        image: '/public/testimonial.jpg',
        name: 'Mr Amit Kumar (Asst. General Manager)',
        company: 'Tafcon Projects India PVT. LTD.',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero deleniti aliquam at iste voluptas, harum explicabo, iusto recusandae nisi nostrum, qui hic suscipit quidem sint animi accusantium ducimus unde quae nemo corrupti ullam tenetur ipsam! Enim vel vitae autem ab consequuntur perferendis quas reprehenderit sint, asperiores, incidunt cupiditate quisquam.",
    },
    {
        id: 3,
        image: '/public/testimonial.jpg',
        name: 'Mr Amit Kumar (Asst. General Manager)',
        company: 'Tafcon Projects India PVT. LTD.',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero deleniti aliquam at iste voluptas, harum explicabo, iusto recusandae nisi nostrum, qui hic suscipit quidem sint animi accusantium ducimus unde quae nemo corrupti ullam tenetur ipsam! Enim vel vitae autem ab consequuntur perferendis quas reprehenderit sint, asperiores, incidunt cupiditate quisquam.",
    },
    {
        id: 4,
        image: '/public/testimonial.jpg',
        name: 'Mr Amit Kumar (Asst. General Manager)',
        company: 'Tafcon Projects India PVT. LTD.',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero deleniti aliquam at iste voluptas, harum explicabo, iusto recusandae nisi nostrum, qui hic suscipit quidem sint animi accusantium ducimus unde quae nemo corrupti ullam tenetur ipsam! Enim vel vitae autem ab consequuntur perferendis quas reprehenderit sint, asperiores, incidunt cupiditate quisquam.",
    },
    {
        id: 5,
        image: '/public/testimonial.jpg',
        name: 'Mr Amit Kumar (Asst. General Manager)',
        company: 'Tafcon Projects India PVT. LTD.',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero deleniti aliquam at iste voluptas, harum explicabo, iusto recusandae nisi nostrum, qui hic suscipit quidem sint animi accusantium ducimus unde quae nemo corrupti ullam tenetur ipsam! Enim vel vitae autem ab consequuntur perferendis quas reprehenderit sint, asperiores, incidunt cupiditate quisquam.",
    },
    {
        id: 6,
        image: '/public/testimonial.jpg',
        name: 'Mr Amit Kumar (Asst. General Manager)',
        company: 'Tafcon Projects India PVT. LTD.',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero deleniti aliquam at iste voluptas, harum explicabo, iusto recusandae nisi nostrum, qui hic suscipit quidem sint animi accusantium ducimus unde quae nemo corrupti ullam tenetur ipsam! Enim vel vitae autem ab consequuntur perferendis quas reprehenderit sint, asperiores, incidunt cupiditate quisquam.",
    },
];

const Testimonial = () => {
    return (
        <div className='px-4 py-8 max-w-[90%] mx-auto'>
            <h4 className='text-3xl font-Nunito font-semibold text-blue-600 uppercase text-center'>TESTIMONIAL</h4>
            <h2 className='text-4xl font-Nunito font-extrabold mb-4 text-center'>What Our Clients Say About Our Digital Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {cards.map((card, index) => (
                    <div key={`${index}-${cards.length}`} className='bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row gap-4 items-center'>
                                <img src={card.image} alt={card.name} className='h-12 w-12 object-cover rounded-full' />
                                <div className='flex flex-col'>
                                    <p className='font-Nunito font-semibold text-blue-600'>{card.name}</p>
                                    <p className='font-Nunito font-normal text-gray-800 uppercase'>{card.company}</p>
                                </div>
                            </div>
                            <p className='mt-4 font-Rubik font-light text-black'>{card.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
