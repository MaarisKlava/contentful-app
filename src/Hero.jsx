import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus hic ipsa error nulla quod. Odit exercitationem praesentium quis iure veritatis placeat. Quisquam illum repellat nisi! Suscipit, cumque quisquam. Provident, corporis.
                    Est, debitis! Cupiditate, impedit adipisci nihil tempora nostrum vel quibusdam omnis pariatur asperiores, ea neque voluptatum velit ducimus aperiam! Recusandae nostrum maxime dolorum fugiat animi quibusdam porro! Est, ipsum corporis!
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woamn and the browser" className='img'/>
                </div>
        </div>
    </section>
  )
}
export default Hero