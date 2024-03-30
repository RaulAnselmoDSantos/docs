import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'SSAD',
    Svg: require('@site/static/img/SSAD.svg').default,
    description: (
      <>
        Módulo web de gestão de protocolos. Este é o módulo do sistema usado pela Prefeitura para responder, tramitar, encaminhar e finalizar os protocolos criados pelos usuários
      </>
    ),
  },
  {
    title: 'APP-156',
    Svg: require('@site/static/img/APP-156.svg').default,
    description: (
      <>
        O App 156 é um aplicativo móvel que oferece acesso aos serviços públicos municipais, permitindo que os usuários solicitem serviços, façam reclamações e relatem problemas diretamente pelo celular.
      </>
    ),
  },
  {
    title: 'PORTAL 156',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        O Portal 156 é uma plataforma online para acesso aos serviços públicos municipais, permitindo que os usuários solicitem serviços, façam reclamações e relatem problemas à administração local.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
