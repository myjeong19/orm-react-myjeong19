export const Detail = () => {
  return (
    <form>
      <div className='mb-3'>
        <label for='exampleFormControlInput1' className='form-label'>
          제목
        </label>
        <input
          type='text'
          className='form-control'
          id='exampleFormControlInput1'
        />
      </div>
      <div className='mb-3'>
        <label for='exampleFormControlTextarea1' className='form-label'>
          내용
        </label>
        <textarea
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='3'
        ></textarea>
      </div>

      <div class='btn-group' role='group' aria-label='Basic outlined example'>
        <button type='button' class='btn btn-outline-secondary'>
          등록
        </button>
        <button type='button' class='btn btn-outline-secondary'>
          취소
        </button>
      </div>
    </form>
  );
};
