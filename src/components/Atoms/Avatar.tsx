import './Avatar.scss';

export type AvatarType = {
    img: string | null;
    alt: string;
    size?: string;
}

export default function Avatar({ img, alt, size = '48px' }: AvatarType) {
    const src = img ?? './blank-profile.png';
    const styleVariable: { [key: string]: string } = { '--size': size };
    return (
        <div className="avatar" style={styleVariable}>
            <img src={src} alt={alt} />
        </div>
    );
}