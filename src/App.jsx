
import './App.css'
import Button from './components/Button'

function App() {

  return (
    <div className="App">
      <h1>Buttons</h1>
      <section id='buttons'>
        <article className='buttons__row'>
          <Button 
            content="Default"
          />
        </article>
        <article className='buttons__row'>
          <Button 
            variant="outline" 
            color="primary"
            content="Default"
          />
        </article>
        <article className='buttons__row'>
          <Button 
            variant="text" 
            color="danger"
            content="Default"
          />
        </article>
        <article className='buttons__row'>
          <Button 
            variant="default" 
            color="secondary"
            size="lg"
            disabled
            content="Default"
          />
        </article>
        <article className='buttons__row'>
          <Button 
            variant="outline" 
            color="secondary"
            size="lg"
            disabled
            content="Default"
          />
        </article>
        <article className='buttons__row'>
          <Button 
            variant="text" 
            color="secondary"
            size="lg"
            disabled
            content="Default"
          />
        </article>
        <article className='buttons__row'>
          <Button 
            variant="default" 
            color="secondary"
            size="sm"
            startIcon="face"
            content="Default"
          />
        </article>
        <article className='buttons__row'>
          <Button 
            variant="default" 
            color="danger"
            size="md"
            endIcon="arrow_forward_ios"
            content="Default"
          />
        </article>
        <article className='buttons__row'>
          <Button 
            variant="default" 
            color="primary"
            size="lg"
            content="Enviar"
          />
        </article>
      </section>
    </div>
  )
}

export default App
