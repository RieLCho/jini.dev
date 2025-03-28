import { Dot } from './Dot';
import { Italic } from './Italic';
import { SubTitle } from './Title';

interface techStack {
    label: string;
    url: string;
}

const Project = ({
    repo,
    title,
    subTitle,
    description,
    imgPath,
    techStack,
}: {
    repo: string;
    title: string;
    subTitle?: string;
    description?: string;
    imgPath?: string;
    techStack?: techStack[];
}) => {
    return (
        <div className="flex flex-col gap-2">
            <a href={repo} target="_blank">
                <SubTitle>
                    <Dot>
                        <span className="underline">{title}</span>
                    </Dot>
                </SubTitle>
            </a>
            <div className="pl-5">
                {subTitle && <Italic>{subTitle}</Italic>}
                <div className="flex gap-x-6 py-2">
                    {imgPath && (
                        <img src={imgPath} alt={title} className="w-40 h-auto rounded-3xl border-black shadow-box" />
                    )}
                    <div className="flex-col lg:block md:hidden sm:hidden">
                        {description && <p className="font-maple-light text-xl whitespace-pre-line">{description}</p>}
                        {techStack && (
                            <Italic>
                                {techStack.map((v) => {
                                    return (
                                        <a key={v.label} href={v.url} target="_blank">
                                            <div>{`${v.label}`}</div>
                                        </a>
                                    );
                                })}
                            </Italic>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
