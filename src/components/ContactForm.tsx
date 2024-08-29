import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postContactDetails } from '../redux/slices/contact.slice';

interface ContactForm {
  isCreated: boolean;
}

const ContactForm = (props: ContactForm) => {
  const { isCreated } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [contact, setContact] = useState({});

  const handleChangeContact=(e: any)=> {
    setContact({...contact,[e.target.name]:e.target.value})
  } 

  const handleCreateContact=(e:any)=> {
    e.preventDefault();
    console.log(contact);
    //@ts-ignore
    dispatch(postContactDetails(contact))
  }

  function handleCancel() {
    navigate('/', { replace: true });
  }
  return (
    <form
      className='flex justify-center border-gray-900'
      onSubmit={handleCreateContact}>
      <table>
        <tr>
          <td>
            <label>First Name:</label>
          </td>
          <td>
            <input
              type='text'
              className='border-2'
              name='first_name'
              onChange={handleChangeContact}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Last Name:</label>
          </td>
          <td>
            <input
              type='text'
              className='border-2'
              name='last_name'
              onChange={handleChangeContact}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Status</label>
          </td>
          <td>
            <input
              type='radio'
              value={'active'}
              name='status'
              onChange={handleChangeContact}
            />{' '}
            Active<br></br>
            <input
              type='radio'
              value={'inactive'}
              name='status'
              onChange={handleChangeContact}
            />{' '}
            Inactive
          </td>
        </tr>
        <tr className='py-2'>
          <td>
            <input
              type='submit'
              className='px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              value={`Save${isCreated ? ' ' : 'edited '}contact`}
            />
          </td>
          <td>
            <input
              type='button'
              className='px-3 py-2 text-xs focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
              onClick={handleCancel}
              value={'Cancel'}
            />
          </td>
        </tr>
      </table>
    </form>
  );
};

export default ContactForm;
