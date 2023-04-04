
import './App.css'
import Aside from './components/Aside'
import Button from './components/Button'

function App() {

  return (
    <div className='App'>
      <div id="App">
        <main id='main'>
          <h1 className='main__title'>Buttons</h1>
          <section id='buttons'>
            <article className='buttons__row'>
              <div className='buttons__item'>
                <p className='buttons__desc'>{ "<Button />" }</p>
                <Button 
                  content="Default"
                />
              </div>
              <div className='buttons__item'>
                <p className='buttons__desc hover'>{ "&:hover, &:focus" }</p>
                <Button 
                  content="Default"
                />
              </div>
            </article>
            <article className='buttons__row'>
              <div className='buttons__item'>
                <p className='buttons__desc'>{ "<Button variant=”outline” />" }</p>
                <Button 
                  content="Default"
                  variant="outline"
                  color="primary"
                />
              </div>
              <div className='buttons__item'>
                <p className='buttons__desc hover'>{ "&:hover, &:focus" }</p>
                <Button 
                  content="Default"
                  variant="outline"
                  color="primary"
                />
              </div>
            </article>
            <article className='buttons__row'>
              <div className='buttons__item'>
                <p className='buttons__desc'>{ "<Button variant=”text” />" }</p>
                <Button 
                  content="Default"
                  variant="text"
                  color="primary"
                />
              </div>
              <div className='buttons__item'>
                <p className='buttons__desc hover'>{ "&:hover, &:focus" }</p>
                <Button 
                  content="Default"
                  variant="text"
                  color="primary"
                />
              </div>
            </article>
            <article className='buttons__row'>
              <div className='buttons__item'>
                <p className='buttons__desc'>{ "<Button disableShadow />" }</p>
                <Button 
                  content="Default"
                  color="primary"
                  disableShadow
                />
              </div>
            </article>
            <article className='buttons__row'>
              <div className='buttons__item'>
                <p className='buttons__desc'>{ "<Button disabled />" }</p>
                <Button 
                  content="Disabled"
                  disabled
                />
              </div>
              <div className='buttons__item'>
                <p className='buttons__desc'>{ "<Button variant=”text” disabled />" }</p>
                <Button 
                  content="Disabled"
                  variant="text"
                  disabled
                />
              </div>
            </article>
            <article className='buttons__row'>
              <div className='buttons__item'>
                <p className='buttons__desc'>{ "<Button startIcon=”backspace” />" }</p>
                <Button 
                  content="Default"
                  color="danger"
                  startIcon="backspace"
                />
              </div>
              <div className='buttons__item'>
                <p className='buttons__desc'>{ "<Button endIcon=”send” />" }</p>
                <Button 
                  content="Default"
                  color="primary"
                  endIcon="send"
                />
              </div>
            </article>
            <article className='buttons__row'>
              <div className='buttons__item'>
                <p className='buttons__desc'>{ "<Button size=”sm” />" }</p>
                <Button 
                  content="Default"
                  color="primary"
                  size="sm"
                />
              </div>
              <div className='buttons__item'>
                <p className='buttons__desc'>{ "<Button size=”md” />" }</p>
                <Button 
                  content="Default"
                  color="primary"
                  size="md"
                />
              </div>
              <div className='buttons__item'>
                <p className='buttons__desc'>{ "<Button size=”lg” />" }</p>
                <Button 
                  content="Default"
                  color="primary"
                  size="lg"
                />
              </div>
            </article>
            <article className='buttons__row'>
              <div className='buttons__item'>
                <p className='buttons__desc'>{ "<Button color=”default” />" }</p>
                <Button 
                  content="Default"
                />
              </div>
              <div className='buttons__item'>
                <p className='buttons__desc'>{ "<Button color=”primary” />" }</p>
                <Button 
                  content="Default"
                  color="primary"
                />
              </div>
              <div className='buttons__item'>
                <p className='buttons__desc'>{ "<Button color=”secondary” />" }</p>
                <Button 
                  content="Default"
                  color="secondary"
                />
              </div>
              <div className='buttons__item'>
                <p className='buttons__desc'>{ "<Button color=”danger” />" }</p>
                <Button 
                  content="Default"
                  color="danger"
                />
              </div>
            </article>
            <article className='buttons__row'>
              <div className='buttons__item'>
                <p className='buttons__desc hover'>{ "&:hover, &:focus" }</p>
                <Button 
                  content="Default"
                />
              </div>
              <div className='buttons__item'>
                <Button 
                  content="Default"
                  color="primary"
                />
              </div>
              <div className='buttons__item'>
                <Button 
                  content="Default"
                  color="secondary"
                />
              </div>
              <div className='buttons__item'>
                <Button 
                  content="Default"
                  color="danger"
                />
              </div>
            </article>
          </section>
        </main>
        <Aside />
      </div>
      <p class="footer">
        created by  
          <span class="username">
            <a href="https://devchallenges.io/portfolio/Anselmo1122" target="_blank">
              Anselmo1122
            </a>
          </span>
          - devChallenges.io
      </p>
    </div>
  )
}

export default App
